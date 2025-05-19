<template>
    <footer class="footer">
        <h2>Our Contact</h2>
        <div class="footer-container">

                <!-- Contact Us Section -->
                <div class="contact-us">
                    <h3>Contact us</h3>
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        Dorfstrasse <a>11</a><br>
                        CH-<a>3715</a> Adelboden<br>
                        Switzerland
                    </p>
                    <p>
                        <i class="fa-solid fa-phone"></i>
                        <a href="tel:+41225391383">+41 22 539 1383</a>
                    </p>
                    <p>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:info@alpinopalace.com">info@alpinopalace.com</a>
                    </p>
                </div>

                <!-- Office Hours Section -->
                <div class="office-hours">
                    <h3>Office Hours</h3>
                    <p>
                        <span class="day">Monday to Friday</span><br>
                        <span class="time">9:00 am to 6:00 pm</span>
                    </p>
                    <p>
                        <span class="day">Saturday</span><br>
                        <span class="time">9:00 am to 12 noon</span>
                    </p>
                    <p class="day">Closed on Sundays</p>
                </div>

                <!-- Follow us Section -->
                <div class="follow-us">
                <h3>Follow us</h3>
                <p>Stay informed about our news!</p>
                <form>
                    <div class="email-container">
                        <input
                            type="email"
                            placeholder="Write your e-mail here"
                            class="email-input"
                        />
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" id="privacy" />
                        <label for="privacy">I accept the <u>privacy policy</u></label>
                    </div>
                    <button type="submit" class="register-button">REGISTER</button>
                </form>
            </div>
        </div>  
    </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>

    .footer {
        position:relative;
        background-image: url('@/assets/footerbackground3.png'); /* Ajoutez l'image d'arrière-plan */
        background-size: cover;
        background-position: center;
        color: #800000;
        padding: 20px 50px;
        font-family: 'Coco Gothic', sans-serif;
        display: flex;
        flex-direction: column;
        z-index: 1; /* Positionne le contenu au-dessus du filtre */
    }
    .footer::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7); /* Couleur blanche avec opacité */
        z-index: -1; /* Place le filtre en dessous du contenu */
        pointer-events: none; /* Permet de cliquer sur les éléments au-dessus */
    }
    .footer h2 {
        font-family: 'Coco Gothic', sans-serif; 
        font-weight: 300; /* Utiliser une version light de la police */
        color: #910D00; /* Couleur dorée pour HOME */
        text-transform: uppercase;
        font-size: 1.2rem; /* Ajuste la taille du texte */
    }
    .footer-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15rem;
    }

    .follow-us h3,
    .contact-us h3,
    .office-hours h3 {
    font-family: 'Catchy Mager', serif;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #800000;
    }


    .follow-us{
        margin-top: 2.5%;
        width: 35%;
    }

    .contact-us p,
    .office-hours p {
    margin: 0;
    line-height: 1.8;
    font-size: 1rem;
    }

    .contact-us p{
        color: black;
    }

    .contact-us i,
    .office-hours i {
    color: #800000;
    margin-right: 10px;
    }

    .contact-us a,
    .office-hours .time {
    font-family: 'Coco Gothic Small Caps', sans-serif;
    font-weight: bold;
    color: black;
    }

    .office-hours .day {
    color: #800000;
    font-weight: normal;
    }

    .office-hours .closed {
    color: #a00;
    font-weight: bold;
    }

    .follow-us p,
    .follow-us label {
    font-size: 1rem;
    color: black;
    }

    .follow-us u {
    font-size: 1rem;
    color: grey;
    }

    .email-container {
    border-bottom: 2px solid #800000;
    margin-bottom: 1rem;
    }

    .email-input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0.5rem 0;
    font-size: 1rem;
    font-family: 'Coco Gothic', sans-serif;
    color: #800000;
    background-color: transparent;
    }

    .email-input::placeholder {
    color: #d8a5a5;
    font-size: 1rem;
    }

    .checkbox-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 1.2rem;
    }

    .checkbox-container a {
    color: #800000;
    text-decoration: none;
    font-weight: bold;
    }

    .register-button {
        display: flex;
        justify-self: center;
        background-color: #800000;
        width: max;
        color: #fff;
        border: none;
        padding: 0.8rem 2rem;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        font-family: 'Coco Gothic', sans-serif;
    }

    .register-button:hover {
    background-color: #a00;
    }

    .footer-logo {
    margin-top: 1rem;
    text-align: center;
    }

    .footer-logo img {
    max-width: 40%;
    margin-right: 13%;
    }
</style>
