import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, Li } from './ImageGalleryItem.styled';

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
        <Li key={id}>
          <Image loading="lazy" src={webformatURL} alt={tags} onClick={this.toggleModal} />
        </Li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
