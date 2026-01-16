const Map = () => {
    return ( 
        <div className="w-full h-full min-h-[400px]">
            <iframe 
                title="gmap" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.342921508215!2d91.6896297760924!3d26.18552099096245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b1e626a575f%3A0x6b776269668d2979!2sConference%20Hall%2C%20IIT%20Guwahati!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%"
                style={{border:0, minHeight: '400px'}}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
export default Map;