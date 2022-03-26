import './styles.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

//icons
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillHandbagFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

//
import { Context } from '../../../context/UserContext'

function NavBar() {
    const { authenticated, logout } = useContext(Context)

    return (
        <nav className='header'>
            <div className='logo'>
                <h1>
                    <Link to='#'>
                        <span id='first'>L</span>O<span id='first'>G</span>O
                    </Link>
                </h1>
            </div>
            {authenticated && (
                <>
                    <div className='menu'>
                        <ul>
                            <li>
                                <Link to='#'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='#'>
                                    Outros
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='search-form'>
                        <input type='search'
                            placeholder='O que você esta procurando ?'
                        />
                        <i>
                            <Link>
                                <FaSearch />
                            </Link>
                        </i>
                    </div>

                    <div className='userLogged'>
                        <i>
                            <Link>
                                <FaUserAlt />
                            </Link>
                        </i>
                        <i>
                            <Link>
                                <BsFillHandbagFill />
                            </Link>
                        </i>
                        <i>
                            <Link onClick={logout}>
                                <BiLogOut />
                            </Link>
                        </i>
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavBar