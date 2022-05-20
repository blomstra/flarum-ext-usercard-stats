import type Mithril from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import extract from 'flarum/common/utils/extract';
import icon from 'flarum/common/helpers/icon';

export interface UserStatAttrs extends ComponentAttrs {
  icon: string;
  displayText: string;
}

export default class UserStat<T extends UserStatAttrs = UserStatAttrs> extends Component<T> {
  view(vnode: Mithril.Vnode) {
    const attrs = Object.assign({}, this.attrs);

    const iconClass = extract(attrs, 'icon');
    const displayText = extract(attrs, 'displayText');

    return (
      <div className="userStat">
        {icon(iconClass)}
        {displayText}
      </div>
    );
  }
}
