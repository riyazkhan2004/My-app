import contents from '../JSON/contents.json'
import { FaUserAlt, FaUserGraduate } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
function PassageBox() {
    return (<>
        <div className='PassageRec' style={{
            position: 'relative',
            borderRadius: 10
        }}>
            <div style={{ fontFamily: 'verdana', position: 'relative', paddingTop: '1.5%', paddingLeft: '1.5%', fontSize: 20 }}>
                {contents.headings[0]}<FaUserAlt />
            </div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 2, fontSize: 17 }}>
                {contents.aboutcontent}
            </div>
        </div>


        <div className='PassageRec' style={{
            position: 'relative',
            borderRadius: 10
        }}>
            <div style={{ fontFamily: 'verdana', position: 'relative', paddingTop: '1.5%', paddingLeft: '1.5%', fontSize: 20 }}>
                {contents.headings[1]}<FaUserGraduate /></div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1.5, fontSize: 18 }}>
                <BsDot />{contents.educationcontent1[0]}
                <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 17, paddingLeft: '2vh' }}>
                    {contents.educationcontent1[1]}
                    <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 16 }}>
                        {contents.educationcontent1[2]}
                    </div>
                </div>

            </div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1.5, fontSize: 18 }}>
                <BsDot />{contents.educationcontent2[0]}
                <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 17, paddingLeft: '2vh' }}>
                    {contents.educationcontent2[1]}
                    <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 16 }}>
                        {contents.educationcontent2[2]}
                    </div>
                </div>

            </div>

        </div>

        <div className='PassageRec' style={{
            position: 'relative',
            borderRadius: 10
        }}>
            <div style={{ fontFamily: 'verdana', position: 'relative', paddingTop: '1.5%', paddingLeft: '1.5%', fontSize: 20 }}>
                {contents.headings[2]}<GiSkills /></div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1, fontSize: 18, paddingLeft: '2vh' }}>
                <BsDot />{contents.technicalskillscontent[0]}
            </div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1, fontSize: 18, paddingLeft: '2vh', paddingTop: '0.1%' }}>
                <BsDot />{contents.technicalskillscontent[1]}
            </div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1, fontSize: 18, paddingLeft: '2vh', paddingTop: '0.1%' }}>
                <BsDot />{contents.technicalskillscontent[2]}
            </div>

        </div>

        <div className='PassageRec' style={{
            position: 'relative',
            borderRadius: 10
        }}>
            <div style={{ fontFamily: 'verdana', position: 'relative', paddingTop: '1.5%', paddingLeft: '1.5%', fontSize: 20 }}>
                {contents.headings[3]}<HiOutlineDesktopComputer /></div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1.5, fontSize: 18 }}>
                <BsDot />{contents.experiencecontent1[0]}
                <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 17, paddingLeft: '2vh' }}>
                    {contents.experiencecontent1[1]}
                    <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 16 }}>
                        {contents.experiencecontent1[2]}
                    </div>
                </div>

            </div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1.5, fontSize: 18,paddingTop: '0.1%' }}>
                <BsDot />{contents.experiencecontent2[0]}
                <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 17, paddingLeft: '2vh' }}>
                    {contents.experiencecontent2[1]}
                    <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 16 }}>
                        {contents.experiencecontent2[2]}
                    </div>
                </div>

            </div>
            <div style={{ fontFamily: 'verdana', position: 'relative', padding: '1.5%', lineHeight: 1.5, fontSize: 18,paddingTop: '0.1%' }}>
                <BsDot />{contents.experiencecontent3[0]}
                <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 17, paddingLeft: '2vh' }}>
                    {contents.experiencecontent3[1]}
                    <div style={{ fontFamily: 'verdana', position: 'relative', fontSize: 16 }}>
                        {contents.experiencecontent3[2]}
                    </div>
                </div>

            </div>



        </div>

    </>
    );

}

export default PassageBox;