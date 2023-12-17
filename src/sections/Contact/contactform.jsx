const ContactForm = () => {
    return (
      <section>
        <section className="bg-white">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-dark-blue ">Stellen Sie uns ihre Frage</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Wir freuen uns über Ihre Anfrage. Nutzen Sie diskret unser Kontaktformular. Wir melden uns dann umgehend bei Ihnen.</p>
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark-blue">E-mail</label>
                <input type="email" id="email" className="shadow-sm bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark-blue">Betreff</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-slate-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Lass uns wissen wie wir sie helfen können" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark-blue">Nachricht</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Schreibe deine Nachricht.."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-dark-yellow sm:w-fit hover:bg-dark-red focus:ring-4 focus:outline-none focus:ring-blue-300">Nachricht Schicken</button>
            </form>
          </div>
        </section>
      </section>
    );
  };
  
  export default ContactForm;
  