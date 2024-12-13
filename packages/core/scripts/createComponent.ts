import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import ora from 'ora';

import { getIndexConten, getStyleContent, getComponentContent, getTestComponent } from './components.template';

const spinner = ora(`新建组件中`).start();

main();

function main() {
  try {
    const component = getComponentName();
    createComponentFiles(component);
    createComponentDemo(component);
    addDemoRoute(component);
    addToIndex(component);
    spinner.succeed(`已成功新建 ${component} 组件\n`);
  } catch (e) {
    spinner.fail('新建组件失败\n');
    console.error(e);
  }
}
