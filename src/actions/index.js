export function selectBook(book) {
  //selctbook is action creator return action obj with type prop
  return {
    type: 'Book_Selected',
    payload: book
  };
}
