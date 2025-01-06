const image = new Image();
        image.src = 'kep.jpg'; // Cseréld ki a kép URL-jét

        image.onload = () => {
            const rows = 3; // Hány sorra osztod a képet
            const cols = 3; // Hány oszlopra osztod a képet

            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');

            // Állítsd be a vászon méretét a kép méretének megfelelően
            canvas.width = image.width;
            canvas.height = image.height;

            // Rajzold ki az eredeti képet a vászonra
            context.drawImage(image, 0, 0, image.width, image.height);

            // Számold ki az egyes darabok szélességét és magasságát
            const partWidth = image.width / cols;
            const partHeight = image.height / rows;

            // A darabok tárolása
            const partsContainer = document.getElementById('gameField');
            partsContainer.style.display = 'flex';
            partsContainer.style.flexWrap = 'wrap';

            // Darabolás
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const partCanvas = document.createElement('canvas');
                    partCanvas.width = partWidth;
                    partCanvas.height = partHeight;

                    const partContext = partCanvas.getContext('2d');
                    partContext.drawImage(
                        canvas,
                        col * partWidth, row * partHeight, partWidth, partHeight, // Forrás rész
                        0, 0, partWidth, partHeight // Cél terület
                    );

                    partsContainer.appendChild(partCanvas); // Add hozzá az oldalhoz a részt
                }
            }
        };