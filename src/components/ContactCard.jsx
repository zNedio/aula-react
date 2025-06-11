const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <h3>{contact.nome}</h3>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactCard;