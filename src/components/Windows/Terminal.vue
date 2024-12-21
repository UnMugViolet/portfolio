<template>
  <div class="relative right-0 h-full flex">
    <div
      @click="focusInput" 
      ref="terminalContainer"
      class="w-full h-full pt-6 mt-0.5 bg-black overflow-y-scroll outline-none resize-none px-1 font-trebuchet-pixel text-sm hover:cursor-text">
      <div v-for="(entry, index) in history" :key="index">
        <div class="flex items-center">
          <span class="text-white font-bold mr-1 text-sm">C:\></span>
          <span class="text-white">{{ entry.command }}</span>
        </div>
        <div class="text-white" v-if="entry.output" v-html="formatOutput(entry.output)"></div>
      </div>
      <div class="flex items-center w-full">
        <span class="text-white font-bold mr-1 text-sm">C:\></span>
        <input
          ref="commandInput"
          v-model="currentCommand"
          @keyup.enter="executeCommand"
          @keydown.tab.prevent="autoComplete"
          @keydown.up.prevent="getPreviousCommand"
          @keydown.down.prevent="getNextCommand"
          class="bg-black text-white outline-none font-trebuchet-pixel text-sm w-11/12"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useConnectionStore } from '@/stores/connectionStore'
import terminalData from '@/data/terminal-data.json';

const history = ref([]);
const commandHistory = ref([]);
const currentCommand = ref('');
const commandInput = ref(null);
const terminalContainer = ref(null);
const availableCommands = ['help', 'clear', 'dir', 'ipconfig', 'systeminfo', 'Get-Disk', 'sudo', 'rm'];
const historyIndex = ref(-1);
const router = useRouter();
const connectionStore = useConnectionStore()


const executeCommand = async () => {
  if (currentCommand.value.trim() === '') return;

  const command = currentCommand.value.trim();
  commandHistory.value.push(command);
  historyIndex.value = commandHistory.value.length;
  let output = '';

  // Handle the command execution logic here
  switch (command) {
    case 'help':
      output = 'Available commands:\n' + availableCommands.join('\t');
      break;
    case 'clear':
      history.value = [];
      currentCommand.value = '';
      await nextTick();
      scrollToBottom();
      return;
    case 'systeminfo':
      output = terminalData.systeminfo.result;
      currentCommand.value = '';
      break;
    case 'Get-Disk':
      output = terminalData.diskinfo.result;
      currentCommand.value = '';
      break;
    case 'dir':
      output = terminalData.dir.result;
      currentCommand.value = '';
      break;
    case 'ipconfig':
      output = terminalData.ipconfig.result;
      currentCommand.value = '';
      break;
    case 'sudo':
    case 'rm':
      output = terminalData.hint.result;
      currentCommand.value = '';
      break;
    case 'sudo rm -rf /':
      output = terminalData.meme.result;
      currentCommand.value = '';
      connectionStore.status = 'restart';
      setTimeout(() => {
        router.push('/');
      }, 2000);
      break;
    default:
      output = `${command}` + terminalData.error  ;
  }

  history.value.push({ command, output });
  currentCommand.value = '';
  await nextTick();
  scrollToBottom();
};

const focusInput = () => {
  commandInput.value.focus();
};

const autoComplete = () => {
  const input = currentCommand.value.trim();
  if (input === '') return;

  const matches = availableCommands.filter(cmd => cmd.startsWith(input));

  if (matches.length === 1) {
    currentCommand.value = matches[0];
  } else if (matches.length > 1) {
    const possibilities = matches.join(', ');
    history.value.push({ command: input, output: `${possibilities}` });
  }
};

const formatOutput = (output) => {
  let formattedOutput = output.replace(/\n/g, '<br>');
  formattedOutput = formattedOutput.replace(/\t/g, '&emsp;');
  formattedOutput = formattedOutput.replace(/\f/g, '&ensp;');
  return formattedOutput;
};

const getPreviousCommand = () => {
  if (historyIndex.value > 0) {
    historyIndex.value--;
    currentCommand.value = commandHistory.value[historyIndex.value];
  }
};

const getNextCommand = () => {
  if (historyIndex.value < commandHistory.value.length - 1) {
    historyIndex.value++;
    currentCommand.value = commandHistory.value[historyIndex.value];
  } else {
    historyIndex.value = commandHistory.value.length;
    currentCommand.value = '';
  }
};

const scrollToBottom = () => {
  terminalContainer.value.scrollTop = terminalContainer.value.scrollHeight;
};
</script>