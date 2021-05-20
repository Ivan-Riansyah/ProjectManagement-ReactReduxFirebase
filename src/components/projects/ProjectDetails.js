const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section proect-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo praesentium! Alias, magni ex necessitatibus, porro eaque, quas provident commodi neque facere ab vitae iste itaque esse reiciendis aperiam error.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by me</div>
                    <div>18 Mei 2021</div>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectDetails;