import React from 'react';
import Modal from "react-native-modal";

import {
    Container,
    HeaderText,
    DevContainer,
    ProfileContainer,
    ProfilePic,
    SocialMediaAddress,
    Subtitle,
    Separator,
    CloseButton,
    CloseIcon
} from './styles'

export default function InfoModal({isVisible, onBackdropPress}){

    return (
            <Modal
                isVisible={isVisible}
                onBackdropPress={onBackdropPress}
                onBackButtonPress={onBackdropPress}
            >
            <Container>
                <HeaderText>Conheça os Devs</HeaderText>
                <DevContainer>
                    <ProfileContainer>
                        <ProfilePic source={{ uri:"https://github.com/henriquehanthequeste.png"}}/>
                        <SocialMediaAddress>@Henrique</SocialMediaAddress>
                        <Subtitle>Dev Front-End</Subtitle>
                    </ProfileContainer>
                    
                    <Separator />

                    <ProfileContainer>
                        <ProfilePic source={{ uri: "https://instagram.fvix13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/244261649_257977962772236_5804588426693885929_n.jpg?_nc_ht=instagram.fvix13-1.fna.fbcdn.net&_nc_ohc=a2L1KCZzV8wAX_LkpjB&edm=ABfd0MgBAAAA&ccb=7-4&oh=e396311c385b2e8c085352a1e2ea612c&oe=619141D0&_nc_sid=7bff83"}}/>
                        <SocialMediaAddress>@Mayara</SocialMediaAddress>
                        <Subtitle>Designer UI | UX</Subtitle>
                    </ProfileContainer>
                </DevContainer>

                <CloseButton onPress={() => onBackdropPress()}>
                    <CloseIcon name="close" size={28}/>
                </CloseButton>
            </Container>
        </Modal>
    );
}
