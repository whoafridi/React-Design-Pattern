import Modal from "./components/Modal";
import RegularList from "./components/RegularList";
import SmallAuthorList from "./components/SmallAuthorList";
import SmallBookList from "./components/SmallBookList";
import ModalContent from "./components/ModalContent";
import { persons } from "./data/persons";
import { books } from "./data/books";

const ExampleList = () => {
  return (
    <>
      <div className="flex gap-3 my-5">
        <RegularList
          items={persons}
          sourceName="person"
          ItemComponent={SmallAuthorList}
        />
      </div>
      <div className="flex gap-3 my-5">
        <RegularList
          items={books}
          sourceName="book"
          ItemComponent={SmallBookList}
        />
      </div>
      <div>
        <Modal>
          <ModalContent />
        </Modal>
      </div>
    </>
  );
};

export default ExampleList;
