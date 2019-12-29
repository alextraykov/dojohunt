export default function loadPlacesAPI(callback) {
    const existingScript = document.getElementById("placesAPIScript");

    if (!existingScript) {
        const script = document.createElement("script");

        script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.REACT_APP_API_KEY}`;
        script.id = "placesAPIScript";
        document.body.appendChild(script);

        script.onload = () => {
            if (callback) callback();
        };
    }

    if (existingScript && callback) callback();
}
