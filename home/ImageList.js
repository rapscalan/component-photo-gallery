import Component from '../Component.js';
import imageItem from '../data/images.js';

class ImageList extends Component {
    renderHTML() {
        return`
        <ul class="images"></ul>
    `;
    }

    onRender(dom){
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image};
            const imageItem = new imageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;