import Component from '../Component.js';
import Header from './Header.js';
//import ImageList from './ImageList.js';

class App extends Component{
    onRender(dom){
        const header = new Header
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };
        const ImageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSelection = dom.querySelector('.list-section');
        listSelection.appendChild(imageListDOM);
    }

    renderHTML(){
        return`
        <div>
            Header goes here
            <main>
            </main>
        </div>
        `;
    }
}
export default App;