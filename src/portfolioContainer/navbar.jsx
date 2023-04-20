import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

// const Header = () => {
//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: "2rem",
//                 background: "rgba(255,255,255,0.75)",
//                 padding: "1rem",
//                 top: 0,
//                 width: "100vw",
//                 zIndex: 10,
//             }}
//         >
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#portfolio">Portfolio</a>
//             <a href="#footer">Contact</a>
//         </div>
//     );
// };

export default function AppHeader() {


    const items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                url: '/'
            },
            {
                label: 'AboutMe',
                icon: 'pi pi-fw pi-info',
                url: '/about'
            },
            {
                label: 'ContactMe',
                icon: 'pi pi-fw pi-envelope',
                url: '/contact'
            },
            {
                label: 'MyResume',
                icon: 'pi pi-fw pi-file',
                url: '/resume'
            }
        ];

    return (

            <Menubar style={{
                 display: "flex",
               justifyContent: "center"}}
                     model={items}>
                <Button label="Login" />
            </Menubar>


     );



}



