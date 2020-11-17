import React from 'react'
import { t } from '../../scripts/translateText'
import './index.scss'

const TopBlock: React.FC = () => {
    
    return (
        <section className="cv__topBlock topBlock">
            <h1>{t('resume')}</h1>
            <div className="topBlock__image"></div>
            <article>
                <p>{t('name')}</p> 
                <p>{t('sName')}</p> 
                <p>{t('age')}</p> 
                <p>{t('educ')} <a href="https://app.rs.school/certificate/5mxic62c">Rolling Scopes School (React)</a></p> 
                <p>{t('exp')}</p>
            </article>
        </section>
    )
}
 export default TopBlock;