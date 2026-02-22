
  // Floaters
  const chars = ['<div>','</>','{...}','=>','null','[]','??','&&','px','rem','flex','grid','npm','404','200','css','jsx'];
  const fc = document.getElementById('floaters');
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'floater';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (8 + Math.random() * 14) + 's';
    el.style.animationDelay = (-Math.random() * 14) + 's';
    el.style.fontSize = (11 + Math.random() * 10) + 'px';
    fc.appendChild(el);
  }

  const scene   = document.getElementById('scene');
  const bigCard = document.getElementById('bigCard');
  const closeBtn= document.getElementById('closeBtn');
  const hint    = document.getElementById('hint');
  let opened = false;

  scene.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    hint.classList.add('hidden');
    scene.classList.add('open');
    setTimeout(() => bigCard.classList.add('visible'), 1150);
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    bigCard.classList.remove('visible');
    setTimeout(() => {
      scene.classList.remove('open');
      opened = false;
      setTimeout(() => hint.classList.remove('hidden'), 700);
    }, 350);
  });
