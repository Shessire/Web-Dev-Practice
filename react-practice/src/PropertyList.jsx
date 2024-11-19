import Property from "./Property";

function PropertyList ({ properties }) {
    const styles = { display: "flex"}

    return (
        <div style={styles}>
        {properties.map((p) => (
                <Property key={p.id} {...p}/>
        ))}
        </div>
    )
}

export default PropertyList;