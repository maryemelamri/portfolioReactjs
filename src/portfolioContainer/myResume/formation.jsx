
import '../../index.css';
import ReactDOM from 'react-dom';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import './resume.css';

const TimelineDemo = () => {
    const events1 = [
        { status: "Computer methods applied to business management", date: 'Moroccan School of Engineering Sciences 2022- present', icon: 'pi pi-check', color: '#9C27B0'},
        { status: 'Statistical Computing Modeling 2', date: ' Faculty of Sciences Ain Chock 2021-2022', icon: 'pi pi-check', color: '#673AB7' },
        { status: 'Statistical Computing Modeling 1', date: 'Faculty of Sciences Ain Chock 2020-2021', icon: 'pi pi-check', color: '#FF9800' },
        { status: 'Computer Engineering ', date: 'Higher Normal School 2018-2020', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const events2 = [
        '2020', '2021', '2022', '2023'
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}  >
                {}


            </Card>
        );
    };

    return (

        <section className="timeline-demo" style={{marginTop:"2rem"}} >

            <h2>Formation</h2><br/>
            <div className="card">

                <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>

            {/*<div className="card">*/}
            {/*    <h5>Horizontal</h5>*/}
            {/*    <h6>Top Align</h6>*/}
            {/*    <Timeline value={events2} layout="horizontal" align="top" content={(item) => item} />*/}

            {/*    <h6>Bottom Align</h6>*/}
            {/*    <Timeline value={events2} layout="horizontal" align="bottom" content={(item) => item} />*/}

            {/*    <h6>Alternate Align</h6>*/}
            {/*    <Timeline value={events2} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />*/}
            {/*</div>*/}
        </section>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TimelineDemo />, rootElement);
export default TimelineDemo;