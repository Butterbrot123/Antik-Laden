import { Helmet } from 'react-helmet';

const Meta = ({ description, title, keywords }) => {
  return (
    <Helmet>
      <html lang="de" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Meta;

