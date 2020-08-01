import Swal from 'sweetalert2';

export default {
  handleError(message, title) {
    Swal.fire(title, message, 'error');
  },

  handleSuccess(message, type) {
    Swal.fire(`Success ${type} Data`, message, 'success');
  },

  handleInformation(message, title) {
    Swal.fire(title, message, 'info');
  }
};
