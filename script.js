document.addEventListener('DOMContentLoaded', () => {
    // Tạo hiệu ứng confetti khi trang web được tải
    createConfetti();

    // Thêm sự kiện click cho trái tim
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        heart.style.transform = 'scale(1.5)';
        setTimeout(() => {
            heart.style.transform = 'scale(1)';
        }, 200);
        createConfetti();
    });

    // Thêm sự kiện hover cho gift box
    const giftBox = document.querySelector('.gift-box');
    giftBox.addEventListener('mouseover', () => {
        giftBox.style.transform = 'scale(1.2)';
    });
    giftBox.addEventListener('mouseout', () => {
        giftBox.style.transform = 'scale(1)';
    });

    // Thêm sự kiện click cho gift box
    giftBox.addEventListener('click', () => {
        showMessage();
    });
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function showMessage() {
    const messages = [
        "Chúc bạn luôn xinh đẹp và hạnh phúc! tôi không chơi được vật chất thì tôi chọn tinh thần nhé",
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.createElement('div');
    messageElement.className = 'popup-message';
    messageElement.textContent = randomMessage;
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        messageElement.remove();
        window.location.href = "https://dangdanh611.github.io/doanminhchau/";
    }, 5000);
}

// Thêm style cho confetti và popup message
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: #ff69b4;
        top: -10px;
        animation: fall linear forwards;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }

    .popup-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 105, 180, 0.9);
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-size: 1.2em;
        animation: fadeInOut 3s ease-in-out;
        z-index: 1000;
    }

    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style); 
