import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FileText } from "react-feather";

const Sidebar = () => {
    const notes = [...useSelector((s) => s.notes)];

    return (
        <nav className="col-md-3 col-lg-2 bg-light sidebar">
            <div className="pt-3">
                <ul className="nav flex-column">
                    {notes
                        .sort(
                            (a, b) => new Date(b.updated) - new Date(a.updated)
                        )
                        .map((x) => (
                            <li className="nav-item" key={x.id}>
                                <Link
                                    to={`/notes/edit/${x.id}`}
                                    className="nav-link"
                                    key={x.id}
                                >
                                    <FileText size={16} className="feather" />
                                    {" " + x.title}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
