<div class="footer">
    <button class="add-todo">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
        </svg>
    </button>

</div>

<style>
.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    padding-top: 1rem;
    background-image: linear-gradient(to top, #797a7ab8, #80d0c700);    

}

.add-todo {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    padding: 1rem;
    border-width: 0;
    appearance: none;
    background-color: seashell;
    border-radius: 100%;
    transform: translateX(-50%);
    
}

.icon {
    fill: black;
}
</style>