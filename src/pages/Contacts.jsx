import ContactCard from '../components/ContactCard';

const Contacts = ({ contacts, isLoading }) => {
  return (
    <div className="contacts">
      <h2>Lista de Contatos</h2>
      
      {isLoading ? (
        <p>Carregando contatos...</p>
      ) : (
        <div className="contacts-list">
          {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;