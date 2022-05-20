import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/68c43ef2bd9e68e4a8011cbf5d3d1b34~c5_300x300.webp?x-expires=1653141600&x-signature=fS8pg1aY2%2FcNcTMgZlOxfyczvXg%3D" alt="Hoa"/>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </h4>
                    <span className={cx('username')}>@nguyenvana</span>
                </div>
        </div>
    )
}

export default AccountItem;