
        fetch('Untitled-1.json')
        .then(Response => response.json)
        .then(data => {
            const pedidoTable = document.getElementById('prodcutosVendidosTable');
            mostrarProductos (data[2021]['trimestre_1'], pedidoTable);
            mostrarProductos (data[2021]['trimestre_2'], pedidoTable); 
            mostrarProductos (data[2021]['trimestre_3'], pedidoTable);
            mostrarProductos (data[2021]['trimestre_4'], pedidoTable);
            mostrarProductos (data[2022]['trimestre_1'], pedidoTable);
            mostrarProductos (data[2022]['trimestre_2'], pedidoTable);
            mostrarProductos (data[2022]['trimestre_3'], pedidoTable);
            mostrarProductos (data[2022]['trimestre_4'], pedidoTable);

        })
        
        function mostrarProductos(data, table) {
            if(data && array.isArray(data) && data.length > 0) {
                data.forEach(cliente => {
                    if (cleinte.pedidos && array.isArray(cliente.pedidos)) {
                        cliente.pedidos.forEach(pedido => {
                            if (pedido.productos && array.isArray(pedido.productos)) {
                                pedido.productos.forEach(articulo => {
                                    const row = table.insertRow();
                                    row.innerHTML = `
                                        <td>${articulo.nombre_producto}</td>
                                        <td>${cliente.nombre} ${cliente.apellido} </td>    
                                        <td>${pedido.fecha_compra}</td>   
                                        <td>${articulo.unidades}</td> 
                                        <td>${pedido.total_factura}</td>                                        
                                    `

                                })
                            }
                        })
                    }
                })
            }
        }
        const tablaPedidos = document.getElementById('tablaPedidos');
        const tbodyPedidos = tablaPedidos.querySelector('tbody');

        // Iterar sobre los pedidos y agregar filas a la tabla
        datosJSON.pedidos['2021']['trimestre_1'].forEach(pedido => {
            const row = tbodyPedidos.insertRow();
            row.insertCell(0).textContent = pedido.pedido.numero_pedido;
            row.insertCell(1).textContent = pedido.pedido.fecha_compra;
            row.insertCell(2).textContent = pedido.pedido.fecha_entrega;
            row.insertCell(3).textContent = pedido.pedido.total_factura;
        });
