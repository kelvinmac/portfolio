import {handleDirectoryCommand, handleListDirectory} from "src/components/terminal/logic/directory";

let commandsMap = new Map();
commandsMap.set('cd', handleDirectoryCommand);
commandsMap.set('ls', handleListDirectory);

export default commandsMap;