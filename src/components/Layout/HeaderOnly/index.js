import Header from "../HeaderOnly/Header/Header";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
                <div className="content">
                    {children}
                </div>
        </div>
     );
}

export default DefaultLayout;