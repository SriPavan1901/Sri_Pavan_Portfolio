import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
export default class PortfolioBanner extends LightningElement {

    @api recordId //= 'a005j00000TJGgQAAX'
    @api linkedinUrl //= 'https://www.linkedin.com/in/sripavankumarravuri'
    @api twitterUrl //= 'https://twitter.com/ravurisripavan'
    @api githubUrl //= 'https://github.com/SriPavan1901'
    @api trailheadUrl //= 'https://www.salesforce.com/trailblazer/sravuri14'
    @api youtubeUrl //= ''
    @api blogUrl //= ''


    userPic = `${PortfolioAssets}/PortfolioAssets/profilePic.jpg`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/X_logo.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,DESIGNATION,COMPANY_NAME,COMPANY_LOCATION]})
    portfoliData
        /*portfolioHandler({data, error}){
            if(data){
                console.log("record Data", JSON.stringify(data))
            }
            if(error){
                console.error("error", error)
            }
        }*/

        get fullName(){
            return getFieldValue(this.portfoliData.data, FULLNAME)
        }
        get designation(){
            return getFieldValue(this.portfoliData.data, DESIGNATION)
        }
        get companyName(){
            return getFieldValue(this.portfoliData.data, COMPANY_NAME)
        }
        get companyLocation(){
            return getFieldValue(this.portfoliData.data, COMPANY_LOCATION)
        }
}