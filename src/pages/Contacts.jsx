import ContactCard from '../components/ContactCard';

const Contacts = ({ contacts, isLoading }) => {
  return (
    <div className="contacts">
      <h2>Lista de Contatos</h2>
      <p className="total-contacts">Total de contatos: {contacts.length}</p>
      
      {isLoading ? (
        <p>Carregando contatos...</p>
      ) : (
        <div>
          {contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;