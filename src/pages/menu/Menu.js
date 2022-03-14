import Summary from "./summary/Summary";
import Item from "./item/Item";
import { useSelector } from "react-redux";

function Menu() {
    const items = useSelector((state) => state.itemReducer);

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-9 col-xl-10">
                    <div className="container-fluid">
                        <div className="row">
                        {items.map((item) => (
                            <div key={item.id} className="col-6 col-sm-4 col-lg-3 col-xl-2"><Item item={item} /></div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-xl-2">
                    <Summary />
                </div>
            </div>
        </>
    );
}

export default Menu;
