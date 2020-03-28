function updatemap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp =>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            
            cases = element.infected;
            if(cases>255)
            {
                color = "rgb(255,0,0)";
            }
            else
            {
                color = `rgb(255,${200-cases},0)`;
            }

            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);

            new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
                });
                     
        });
    }) 
}
setInterval(updatemap,200000)
updatemap();