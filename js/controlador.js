function showInfo() {
    $.ajax({
        url:"/vikia/info",
        method:"GET",
        dataType:"json",
        success:(res)=>{
            $('#products').html(`
            <div class="prod">
                <i class="fa-solid fa-radio"></i>
                <span>${res[0].descripcion}</span>
            </div>
            <div class="prod">
                <i class="fa-solid fa-record-vinyl"></i>
                <span>${res[1].descripcion}</span>
            </div>
            <div class="prod">
                <i class="fa-solid fa-compact-disc"></i>
                <span>${res[2].descripcion}</span>
            </div>`);
            res.forEach(artist => {
                $('#menu-artists').append(`<li class="nav-item"><div class="nav-link" onclick="verArtista('${artist._id}')"><i class="fas fa-music"></i> ${artist.nombreArtista}</div></li>`);
            });
        },
        error:(error)=>{
            console.log(error);
        }
    });
}

showInfo();