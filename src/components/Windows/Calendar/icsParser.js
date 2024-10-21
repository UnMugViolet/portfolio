import ICAL from 'ical.js'

export function parseICS(icsData) {
  const jcalData = ICAL.parse(icsData)
  const comp = new ICAL.Component(jcalData)
  const vevents = comp.getAllSubcomponents('vevent')
  const events = []

  const now = new Date()

  vevents.forEach((vevent) => {
    const event = new ICAL.Event(vevent)
    if (event.isRecurring()) {
      const expand = new ICAL.RecurExpansion({
        component: vevent,
        dtstart: event.startDate
      })

      while (expand.next()) {
        const occurrenceStart = expand.last.toJSDate()
        const occurrenceEnd = new Date(occurrenceStart.getTime() + event.duration.toSeconds() * 1000)

        // Only include events that have already occurred or are occurring today
        if (occurrenceEnd >= now) {
          events.push({
            summary: event.summary,
            description: event.description,
            location: event.location,
            startDate: occurrenceStart,
            endDate: occurrenceEnd
          })
        }
      }
    } else {
      const eventStart = event.startDate.toJSDate()
      const eventEnd = event.endDate.toJSDate()

      // Only include events that have already occurred or are occurring today
      if (eventEnd >= now) {
        events.push({
          summary: event.summary,
          description: event.description,
          location: event.location,
          startDate: eventStart,
          endDate: eventEnd
        })
      }
    }
  })

  return events
}
