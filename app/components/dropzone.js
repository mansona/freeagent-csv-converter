import Component from '@glimmer/component';

/**
 * Most of this implementation comes from https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
 */
export default class DropzoneComponent extends Component {
  handleDrop(event) {
    event.preventDefault();

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...event.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();

          // TODO process file
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...event.dataTransfer.files].forEach((file, i) => {
        // TODO process file
      });
    }
  }

  handleDragOver(event) {
    event.preventDefault();
  }
}
