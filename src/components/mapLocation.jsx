// Google Maps component to replace the placeholder Paper element
const MapLocation = () => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7572380113456!2d32.62199931475247!3d0.31230199975522856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb828add16c9%3A0x9a1d4a3e11c5e35b!2sOld%20Port%20Bell%20Rd%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus" 
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapLocation;