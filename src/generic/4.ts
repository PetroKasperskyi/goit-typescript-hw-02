/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentItem {
  title: string;
};

class Component<T extends ComponentItem> {
  constructor (public props:T) {}
};

class Page extends Component<ComponentItem> {
  pageInfo () {
    console.log(this.props.title);
  }
};

export {};