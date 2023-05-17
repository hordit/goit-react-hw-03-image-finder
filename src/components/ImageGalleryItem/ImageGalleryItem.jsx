import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags  } = this.props;
    const { showModal } = this.state;
    
    return (
      <>
        <li key={id}>
          <img loading="lazy" src={webformatURL} alt={tags} onClick={this.toggleModal} width="480" />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" width="600" />
          </Modal>
        )}
      </>
    );
  }
}
