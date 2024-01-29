import { PageNavbar } from "../PageNavbar";
import { PageFooter } from '../PageFooter';
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Shared.css'
import Table from 'react-bootstrap/Table';

export const Shared = () => {
    return(
        <div className="shared">
            <PageNavbar></PageNavbar>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <h5>Explanations</h5>
                            <Table hover bordered>
                                <tbody>
                                    <tr>
                                        <td><a href="https://youtu.be/PwxTbksJ2fo?list=PL-hbdvcqaT76VfAcP9RzQUtLKX09ViSQz" target="_blank" rel="noopener noreferrer">Fork System Call</a></td>
                                        <td>This youtube video helped me a gain a better understanding of how fork() works, in preparation for my Operating Systems module exam. </td>
                                    </tr>
                                    <tr>
                                        <td><a href="http://linuxcommand.org/index.php" target="_blank" rel="noopener noreferrer">Linux Commands</a></td>
                                        <td>An introductory guide to Linux commands.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.youtube.com/c/PedroTechnologies/featured" target="_blank" rel="noopener noreferrer">PedroTech</a></td>
                                        <td>Web development tutorials.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.youtube.com/playlist?list=PL1tIFPlmF4ymILyzmcQmimv7RHBlY3N15" target="_blank" rel="noopener noreferrer">Test Driven Development</a></td>
                                        <td>A playlist of videos by Codemanship explaining TDD in Java.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3Schools</a></td>
                                        <td>Probably the most used website by programmers, offering guides for a range of technologies.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col>
                            <h5>Finance</h5>
                            <Table hover bordered>
                                <tbody>
                                    <tr>
                                        <td><a href="https://www.youtube.com/watch?v=gFQNPmLKj1k&ab_channel=AliAbdaal" target="_blank" rel="noopener noreferrer">How to Invest for Beginners</a></td>
                                        <td>This video by Ali Abdaal came up in my suggestions on YouTube and is what encouraged me to become more financially literate.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.investopedia.com/" target="_blank" rel="noopener noreferrer">Investopedia</a></td>
                                        <td>Financial website which breaks down intimidating information into digestible chunks.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.fool.co.uk/" target="_blank" rel="noopener noreferrer">The Motley Fool</a></td>
                                        <td>A recommended website that I have yet to delve into!</td>
                                    </tr>   
                                </tbody>
                            </Table>
                        </Col>

                        <Col>
                            <h5>Programming</h5>
                            <Table hover bordered>
                                <tbody>
                                    <tr>
                                        <td><a href="https://codingbat.com/java" target="_blank" rel="noopener noreferrer">CodingBat</a></td>
                                        <td>Created by Nick Parlante, CodingBat is a great website to practice solving problems using Java and Python across a range of difficulties.
                                            Highly recommended for new programmers due to its simple and clear layout.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">HackerRank</a></td>
                                        <td>A popular programming site amongst developers, ranking users and encouraging improvement by competition.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://leetcode.com/problemset/all/" target="_blank" rel="noopener noreferrer">LeetCode</a></td>
                                        <td>A great site to enhance your programming skills in a variety of languages, provides examples of real-life technical interview questions.
                                            Also, offers a breakdown of your solutions including its runtime and memory usage compared to others.
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <h5>Productivity</h5>
                            <Table hover bordered>
                                <tbody>
                                    <tr>
                                        <td><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom</a></td>
                                        <td>An open-source text editor that is configurable and usable with extensions, for example, .asm allowing you to write assembly language.
                                            Atom will be archived on the 15th December 2022.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">Canva</a></td>
                                        <td>This website allows you to create presentations together.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a></td>
                                        <td>Tool used to design interfaces collaboratively.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.libreoffice.org/" target="_blank" rel="noopener noreferrer">LibreOffice</a></td>
                                        <td>A free open-source office suite, favoured by my university lecturers.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">Notion</a></td>
                                        <td>A feature rich note-taking application, which seamlessly syncs between devices.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></td>
                                        <td>Code editor supporting various languages.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col>
                            <h5>Utilities</h5>
                            <Table hover bordered>
                                <tbody>
                                    <tr>
                                        <td><a href="https://handbrake.fr/" target="_blank" rel="noopener noreferrer">Handbrake</a></td>
                                        <td>Video transcoder, extremely helpful when dealing with less common formats such as .mkv and .mov.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://ninite.com/" target="_blank" rel="noopener noreferrer">Ninite</a></td>
                                        <td>Quickly and safely download all your favourite software.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">OBS Studio</a></td>
                                        <td>A fantastic tool to record your screen.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://docs.microsoft.com/en-us/windows/powertoys/" target="_blank" rel="noopener noreferrer">PowerToys</a></td>
                                        <td>Offers additional features that should be built into Windows! With Colour Picker being my most used.</td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://shotcut.org/" target="_blank" rel="noopener noreferrer">Shotcut</a></td>
                                        <td>Open-source video editer. Useful for my final year project showcase video.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                    </Row>

                </Container>
            </motion.div>
            <motion.footer initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='mySharedFooter'><PageFooter></PageFooter></motion.footer>
        </div>
    )
}