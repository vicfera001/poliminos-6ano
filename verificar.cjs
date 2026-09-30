
const fs=require('fs'), vm=require('vm'), assert=require('node:assert/strict'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
const source=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const math=source.slice(source.indexOf('const pivot'),source.indexOf('const labels'));
const context={};vm.createContext(context);vm.runInContext(math+';this.api={rotate,reflect,translate,perimeter,signature,missions};',context);
const a=context.api;
for(const m of a.missions){assert.equal(m.start.length,5);assert.equal(new Set(m.start.map(c=>c.join(','))).size,5);assert.equal(a.perimeter(m.start),a.perimeter(m.target));assert.equal(a.signature(a.reflect(a.reflect(m.start))),a.signature(m.start));let c=m.start;for(let i=0;i<4;i++)c=a.rotate(c);assert.equal(a.signature(c),a.signature(m.start));}
assert.deepEqual(Array.from(a.rotate([[5,6]])[0]),[4,5]);
assert.deepEqual(Array.from(a.reflect([[4,3]])[0]),[6,3]);
assert.equal(a.perimeter(a.missions[0].start),12);assert.equal(a.perimeter(a.missions[1].start),10);
console.log('PASS: geometry, fixed pivot, reflection axis, area and perimeter invariants.');
if(process.argv.includes('--math-only')) process.exit(0);
const { chromium } = require('playwright');
(async()=>{const browser=await chromium.launch({headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('file://'+path.join(__dirname,'index.html'));
for(let i=0;i<4;i++){await page.selectOption('#mission',String(i));await page.fill('#plan','Plano de teste: seguir as instruções.');for(const step of a.missions[i].solution)await page.click(`[data-action="${step}"]`);await page.fill('#area','5');await page.fill('#perimeter',String(a.perimeter(a.missions[i].start)));await page.fill('#explanation','A área e o perímetro permanecem iguais.');await page.click('#check');assert.match(await page.textContent('#feedback'),/Missão concluída/);}
assert.match(await page.textContent('#progress'),/4 de 4/);await page.selectOption('#mission','0');assert.equal(await page.inputValue('#area'),'5');await page.click('#reset');await page.click('[data-action="right"]');await page.click('#undo');assert.match(await page.textContent('#displacement'),/0 casa\(s\) na horizontal/);
await page.fill('#plan','Mover 3 para a direita');for(let i=0;i<3;i++)await page.click('[data-action="right"]');await page.fill('#area','4');await page.click('#check');assert.match(await page.textContent('#feedback'),/Confira a área/);await page.fill('#area','5');await page.fill('#perimeter','10');await page.click('#check');assert.match(await page.textContent('#feedback'),/Confira o perímetro/);
const downloadPromise=page.waitForEvent('download');await page.click('#export');const download=await downloadPromise;assert.equal(download.suggestedFilename(),'registro-poliminos.txt');
for(const width of [1366,768,390]){await page.setViewportSize({width,height:800});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:path.join(__dirname,`../qa-${width}.png`),fullPage:true});}
assert.deepEqual(errors,[]);await browser.close();console.log('PASS: geometry, 4 missions, feedback, undo, retained records, export, responsive layouts, no runtime errors.');})().catch(e=>{console.error(e);process.exit(1);});
