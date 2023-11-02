const Personal = require("../models/Personal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//FUNCION ENVIANDO EL CORREO ELECTRONICO
const enviarCorreo = async destinatario => {
  console.log("Enviando correo...");
  console.log(process.env.PASSWORD);
  console.log(process.env.EMAIL);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: destinatario,
    subject: "Confirmación de registro",
    html: `
    <td class="esd-stripe" align="center">
    <table bgcolor="#e0fbfc" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
        <tbody>
            <tr>
                <td class="esd-structure es-p5t es-p5b" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="600" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" class="esd-block-text es-p20r es-p20l">
                                                    <p>Gracias por registrarte en nuestro sitio web. Tu registro ha sido confirmado.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p20t es-p20r es-p20l" align="left" style="background: rgb(224,251,252);
background: linear-gradient(0deg, rgba(224,251,252,1) 0%, rgba(255,255,255,1) 100%);" esd-custom-block-id="290327">
                    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="201" valign="top"><![endif]-->
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                        <tbody>
                            <tr>
                                <td width="181" class="esd-container-frame" align="left">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="left" class="esd-block-text es-p20t">
                                                    <h3 style="line-height: 100%;">BIENVENIDO</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-text es-p10t es-m-txt-c">
                                                    <p>Desarrolladores Niko y Kevin</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-social es-p10t es-p10b es-m-txt-c" style="font-size:0">
                                                    <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://viewstripo.email"><img title="Facebook" src="https://hpy.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="24" height="24"></a></td>
                                                                <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://viewstripo.email"><img title="Twitter" src="https://hpy.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="24" height="24"></a></td>
                                                                <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://viewstripo.email"><img title="Instagram" src="https://hpy.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="24" height="24"></a></td>
                                                                <td align="center" valign="top"><a target="_blank" href="https://viewstripo.email"><img title="Youtube" src="https://hpy.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="24" height="24"></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="es-hidden" width="20"></td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td><td width="134" valign="top"><![endif]-->
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                        <tbody>
                            <tr>
                                <td width="134" align="left" class="esd-container-frame">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img src="https://hpy.stripocdn.email/content/guids/CABINET_640d26d5fc995bde0ccc46e783389f46/images/45971615373585151.png" alt="Arianna Rivera" style="display: block; font-size: 12px;" width="134" title="Arianna Rivera"></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td><td width="20"></td><td width="205" valign="top"><![endif]-->
                    <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                        <tbody>
                            <tr>
                                <td width="205" align="left" class="esd-container-frame">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-spacer es-p20t es-m-p0t" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #293241; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="esd-block-menu" esd-tmp-menu-padding="10|10" esd-tmp-menu-font-size="14px" esd-tmp-menu-size="width|20">
                                                    <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                        <tbody>
                                                            <tr class="links-images-left">
                                                                <td align="left" valign="top" width="100%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 10px;"><a target="_blank" href="tel:+00012345678" style="font-size: 14px;"><img src="https://hpy.stripocdn.email/content/guids/CABINET_640d26d5fc995bde0ccc46e783389f46/images/58631615375244812.png" alt="+ 57 3173552802" title="+ 57 3173552802" align="absmiddle" class="es-p15r" width="20">+ 57 3173552802</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="esd-block-menu" esd-tmp-menu-padding="10|10" esd-tmp-menu-font-size="12px" esd-tmp-menu-size="width|20">
                                                    <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                        <tbody>
                                                            <tr class="links-images-left">
                                                                <td align="left" valign="top" width="100%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 10px; padding-bottom: 10px;"><a target="_blank" href="mailto:ariana_rivera@email" style="font-size: 12px;"><img src="https://hpy.stripocdn.email/content/guids/CABINET_640d26d5fc995bde0ccc46e783389f46/images/95111615375244881.png" alt="kevinvilleperez@gmail.com" title="kevinvilleperez@gmail.com" align="absmiddle" class="es-p15r" width="20">kevinvilleperez@gmail.com</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="esd-block-menu" esd-tmp-menu-padding="10|10" esd-tmp-menu-font-size="14px" esd-tmp-menu-size="width|20">
                                                    <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                        <tbody>
                                                            <tr class="links-images-left">
                                                                <td align="left" valign="top" width="100%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-top: 10px;"><a target="_blank" href="https://" style="font-size: 14px;"><img src="https://hpy.stripocdn.email/content/guids/CABINET_640d26d5fc995bde0ccc46e783389f46/images/30981615375244660.png" alt="Cartago, Valle del Cauca" title="Cartago, Valle del Cauca" align="absmiddle" class="es-p15r" width="20">Cartago, Valle del Cauca</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-spacer" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #293241; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if mso]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
</td>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.response);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

// CONTROLADOR DE REGISTRAR USUARIO
const personalRegistrar = async (req, res) => {
  try {
    const datos = req.body;

    // Crea el usuario del objeto
    const personalGuardar = new Personal(datos);
    const enviarEmail = datos.email;

    // Verifica si hay usuarios duplicados
    const consulta = await Personal.find({
      $or: [
        {
          apodo: personalGuardar.apodo.toLowerCase(),
        },
        {
          email: personalGuardar.email.toLowerCase(),
        },
      ],
    });

    if (consulta.length > 0) {
      console.log("Error: ya existe el email o el apodo");
      return res.status(400).json({
        mensaje: "Error: ya existe el email o el apodo",
        status: false,
      });
    } else {
      // Encripta la contraseña
      const hashedPassword = await bcrypt.hash(personalGuardar.password, 10);
      personalGuardar.password = hashedPassword;

      // Guarda el usuario
      await personalGuardar.save();

      // Envía el correo electrónico al usuario
      if (enviarEmail) {
        console.log("Enviando correo al usuario...");
        enviarCorreo(enviarEmail);
      }

      console.log("Registro exitoso");
      return res.status(200).json({
        mensaje: "Registro exitoso",
        status: true,
        datos: personalGuardar.toJSON(),
      });
    }
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE LOGIN
const personalLogin = async (req, res) => {
  try {
    const datos = req.body;

    //VALIDAR LA PRESENCIA DE EMAIL Y CONTRASEÑA
    if (!datos.email || !datos.password) {
      return res.status(400).json({
        status: false,
        resultado: "error",
        mensaje: "Faltan datos por enviar del formulario",
      });
    }

    //BUSCAMOS EL USUARIO POR MEDIO DE EMAIL
    const consulta = await Personal.findOne({ email: datos.email }).exec();

    if (!consulta) {
      return res.status(400).json({
        status: false,
        resultado: "error",
        mensaje: "Usuario no existe en la BD",
      });
    } else {
      //COMPARAR LA CONTRASEÑA ALMACENADA
      const pwdCoincide = await bcrypt.compare(
        datos.password,
        consulta.password
      );

      if (!pwdCoincide) {
        return res.status(400).json({
          status: false,
          resultado: "error",
          mensaje: "Contraseña incorrecta",
        });
      }

      //CREO EL TOKEN DE AUTENTICACION
      const token = jwt.sign(
        {
          userId: consulta._id,
          email: consulta.email,
        },
        process.env.SECRETO,
        {
          expiresIn: "1d",
        }
      );

      return res.status(200).json({
        status: true,
        resultado: "Exitoso",
        mensaje: "Inicio de sesión exitoso",
        usuario: {
          id: consulta._id,
          email: consulta.email,
          token: token,
          nombre: consulta.nombre,
          apellido: consulta.apellido,
          fechaNacimiento: consulta.fechaNacimiento,
          direccion: consulta.direccion,
          telefono: consulta.telefono,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR ACTUALIZAR LOS DATOS PEROSONAL
const personalActualizar = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    //ENCRYPTO LA CONTRASEÑA SI QUIERE CAMBIAR EL USUARIO
    if (data.password) {
      const hashedPassword = await bycrpt.hash(data.password, 10);
      data.password = hashedPassword;
    }

    //ACTUALIZO LA CONSULTA
    const consulta = await Personal.findOneAndUpdate({ _id: id }, data).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el registro con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Actualizar exitoso",
      status: true,
      datos: consulta.toJSON(),
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE ELIMINAR UNA USUARIO
const eliminarUsuario = async (req, res) => {
  try {
    const id = req.params.id;

    //VEREFICO SI EXISTE EL ID
    if (!id) {
      return res.status(400).json({
        mensaje: "ID de usuario no válido",
        status: false,
      });
    }

    //HACE LA CONSULTA SI SE PUEDE ELIMINAR
    const consulta = await Personal.findOneAndDelete(id).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el usuario con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Elimino exitoso",
      status: true,
      datos: consulta.toJSON(),
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//CONTROLADOR DE OBTENER LA INFORMACION DEL USUARIO
const obtenerInformacionPersonal = async (req, res) => {
  try {
    const id = req.params.id;

    //VEREFICO SI EXISTE EL ID
    if (!id) {
      return res.status(400).json({
        mensaje: "ID de usuario no válido",
        status: false,
      });
    }

    //HACE LA CONSULTA OBTENER LA INFROMACION PERSONAL
    const consulta = await Personal.findById(id).exec();

    if (!consulta) {
      return res.status(404).json({
        mensaje: "No se encontró el usuario con el ID proporcionado",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.toJSON(),
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

//REGISTRAR TODOS LOS REGISTROS PERSONALES
const registrarRegistrosPersonales = async (req, res) => {
  try {
    //CONSULTA TRAE TODA SU INFROAMCION PERSONAL
    const consulta = await Personal.find().exec();

    if (consulta.length === 0) {
      return res.status(404).json({
        mensaje: "No se encontraron registros personales",
        status: false,
      });
    }

    return res.status(200).json({
      resultado: "Obtención exitosa",
      status: true,
      datos: consulta.map(personal => personal.toJSON()),
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error en el servidor",
      error: error.message,
      status: false,
    });
  }
};

module.exports = {
  personalRegistrar,
  personalLogin,
  personalActualizar,
  eliminarUsuario,
  obtenerInformacionPersonal,
  registrarRegistrosPersonales,
};
