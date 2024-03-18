import './sidebar.css'

export default function Sidebar() {
    return(
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            src = "https://i.pinimg.com/originals/a8/96/db/a896db882a6273fb83100ae86e97a8ca.jpg"
            alt = ""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Molestias consequatur impedit animi repudiandae, assumenda culpa.
            </p>
          </div>
          <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">CATEGORY1</li>
            <li className="sidebarListItem">CATEGORY2</li>
            <li className="sidebarListItem">CATEGORY3</li>
            <li className="sidebarListItem">CATEGORY4</li>
            <li className="sidebarListItem">CATEGORY5</li>
            <li className="sidebarListItem">CATEGORY6</li>
          </ul>
          </div>
          <div className="sidebarItem">
          <span className="sidebarTitle">Follow me</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-github"></i>
          </div>
          </div>
        </div>
    )
}