import classNames from 'classnames/bind' 
import styles from './Header.module.scss'
import images from '../../../../../assets/images/index.js'
import { Wrapper as PopperWrapper} from '../../../../../components/Popper'
import AccountItem from '../../../../AccountItem'
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
//tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

//hooks
import { useEffect, useState } from 'react'



const cx= classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },3000)
    },[])

    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}> 
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok'/>
                </div>
                <Tippy
                        interactive
                        visible={searchResult.length>0}
                        render={attrs=>(
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}> 
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Account
                                    </h4>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                    <div className={cx('search')}>
                        <input placeholder='Tìm kiếm tài khoản và video' spellCheck='false'/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>                  
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                        
                    </div>
                </Tippy>                  
                <div className={cx('action')}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;