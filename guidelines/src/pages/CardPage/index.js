import { useParams, Navigate } from 'react-router-dom';
import './index.css';
import documentos from '../../public_docs/public_docs';
import HomePageButton from '../../components/HomePageButton';

// TODO: transformar em um service
function GetPageById(id){
  for (const key in documentos) {
    if (documentos[key].id === Number(id)) {
      return documentos[key];
    }
  }
  return null;
}

function RedirectToHomePage(){
  return <Navigate to='/Error'/>
}

function CardPage(){
  const { pageId } = useParams()
  let page = GetPageById(pageId);

  if (page == null){
    return RedirectToHomePage();
  }
  console.log(page.url_header);
    return (
        <div className="reading-page">            
            <div className="image-crop">
            <img alt="three objects" className="reading-header" src={page.url_header} />
            </div>
            <div className="text-block">
              <h1>{ page.title }</h1>
              <p className="prelude">{ page.prelude }</p>
              {page.section.map((s) => {
                  return (
                  <>
                      <h3>{s.sub_title}</h3>
                      {s.paragraph.map((para) => {
                          return <p key={para}>{para}</p>;
                      })}
                  </>
                  )
              })}
            </div>
            <HomePageButton/>
        </div>
    );
}

export default CardPage;
