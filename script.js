document.querySelectorAll('article button').forEach(b=>b.addEventListener('click',()=>{const old=b.textContent;b.textContent='DETAILS COMING SOON';setTimeout(()=>b.textContent=old,1400)}));
