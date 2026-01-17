import './style.css'
import { setupCounter } from './counter.ts'

let link = "https://new.express.adobe.com/publishedV2/urn:aaid:sc:VA6C2:be475afc-57ca-4300-8b0d-90a87221a027?promoid=Y69SGM5H&mv=other";
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <meta http-equiv="Refresh" content="0; url=${link}">
    <h1>Yujin Bae's Graphics Portfolio</h1>
    <p class="link">
      If you're not automatically redirected, 
      click <a href="${link}">here</a> to go to the portfolio. 
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
