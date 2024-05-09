import { getButtonType } from "./helpers.ts";
import { 
  applyScrollingEffect,
  getIcon,
  getIconColor,
  getImage,
  getName,
  getState,
  getAttribute,
  isStateOn,
  isEntityType,
  getWeatherIcon
} from '../../tools/utils.ts';

export function changeButton(context) {
  const buttonType = getButtonType(context);
  const isLight = isEntityType(context, "light");
  const isOn = isStateOn(context);
  const lightColor = getIconColor(context);

  if (buttonType === 'switch' && isOn) {
      if (lightColor && isLight) {
          context.card.style.setProperty('--bubble-button-background-color', getIconColor(context));
          context.elements.buttonBackground.style.opacity = '.5';
      } else {
          context.card.style.setProperty('--bubble-button-background-color', 'var(--accent-color)');
          context.elements.buttonBackground.style.opacity = '1';
      }
  } else {
      context.card.style.setProperty('--bubble-button-background-color', 'rgba(0, 0, 0, 0)');
      context.elements.buttonBackground.style.opacity = '.5';
  }
}
export function changeIcon(context) {
  const buttonType = getButtonType(context);
  const isOn = buttonType !== 'name' ? isStateOn(context) : false;
  const icon = buttonType !== 'name' ? getIcon(context) : context.config.icon;
  const image = buttonType !== 'name' ? getImage(context) : '';
  const isLight = buttonType !== 'name' ? isEntityType(context, "light") : false;

  if (isLight && isOn) {
      context.elements.iconContainer.style.color = getIconColor(context);
  } else {
      context.elements.iconContainer.style.color = '';
  }

  if (image !== '') {
      context.elements.image.style.backgroundImage = 'url(' + image + ')';
      context.elements.icon.style.display = 'none';
      context.elements.image.style.display = '';
  } else if (icon !== '') {
      context.elements.icon.icon = icon;
      context.elements.icon.style.color = isOn && buttonType !== 'state' ? getIconColor(context) : 'inherit';
      context.elements.icon.style.display = '';
      context.elements.image.style.display = 'none';
  } else {
      context.elements.icon.style.display = 'none';
      context.elements.image.style.display = 'none';
  }
}
export function changeName(context) {
  const buttonType = getButtonType(context);
  const name = buttonType !== 'name' ? getName(context) : context.config.name;
  if (name !== context.elements.previousName) {
      applyScrollingEffect(context, context.elements.name, name);
      context.elements.previousName = name;
  }
}
export function changeSlider(context) {
  const buttonType = getButtonType(context);

  if (buttonType === 'slider') {
    context.elements.rangeFill.style.backgroundColor = getIconColor(context);

    if (context.dragging) return;

    let percentage = 0;

    if (isEntityType(context, "light")) {
      percentage = 100 * getAttribute(context, "brightness") / 255;
    } else if (isEntityType(context, "media_player")) {
      percentage = 100 * getAttribute(context, "volume_level");
    } else if (isEntityType(context, "cover")) {
      percentage = getAttribute(context, "current_position");
    } else if (isEntityType(context, "input_number")) {
      const minValue = getAttribute(context, "min");
      const maxValue = getAttribute(context, "max");
      const value = getState(context);
      percentage = 100 * (value - minValue) / (maxValue - minValue);
    }

    context.elements.rangeFill.style.transform = `translateX(${percentage}%)`;
  }
}

export function changeStatus(context) {
  const state = getState(context);

  if (state === 'unavailable') {
      context.card.classList.add('is-unavailable');
  } else {
      context.card.classList.remove('is-unavailable');
  }

  if (isEntityType(context, "light")) {
      context.card.classList.add('is-light');
  } else {
      context.card.classList.remove('is-light');
  }

  if (isStateOn(context)) {
      context.card.classList.add('is-on');
  } else {
      context.card.classList.remove('is-on');
  }
}
// export function changeStyle(context) {
//   const state = getState(context);

//   const customStyle = context.config.styles
//       ? Function('hass', 'entityId', 'state', 'icon', 'return `' + context.config.styles + '`;')(context._hass, context.config.entity, state, context.elements.icon)
//       : '';

//   context.elements.customStyle.innerText = customStyle;
// }

// export function changeStyle(context) {
//     // Utilisez subButton comme nécessaire dans cette fonction

// // Initialisation d'un tableau pour stocker les références aux icônes
// let subButtonIcon = [];

// // Fonction pour initialiser les références aux icônes
// export function initializesubButtonIcon(context) {
//     const subButtons = context.config.sub_button;
//     if (!subButtons) {
//         return;
//     }

//     // Parcours des sous-boutons pour récupérer les icônes
//     for (let i = 0; i < subButtons.length; i++) {
//         const subButton = subButtons[i];
//         if (!subButton) {
//             continue;
//         }

//         // Sélection de l'élément icône en utilisant la classe CSS
//         const iconElement = context.content.querySelector(`.bubble-sub-button-${i + 1} .bubble-sub-button-icon`);
//         if (iconElement) {
//             // Ajout de la référence de l'icône dans le tableau
//             subButtonIcon.push(iconElement);
//         }
//     }
// }

// export function initializesubButtonIcon(context) {
//     // Assurez-vous que context.subButtonIcon est initialisé
//     if (!context.subButtonIcon) {
//         context.subButtonIcon = {};
//     }

//     const iconElement = context.content.querySelector(`.bubble-sub-button-${index} .bubble-sub-button-icon`);
//     if (iconElement) {
//         // Stockez la référence de l'icône dans context.subButtonIcon avec l'identifiant comme clé
//         context.subButtonIcon[subButtonId] = iconElement;
//     }
// }

// export function changeStyle(context) {
//     // Appel de la fonction pour initialiser les icônes
//     initializesubButtonIcon(context);

//     // Utilisez setTimeout ou une autre méthode pour attendre que le DOM soit prêt

//     const state = getState(context);

//     // Appliquez votre style personnalisé
//     const customStyle = context.config.styles
//         ? Function('hass', 'entityId', 'state', 'icon', 'subButtonIcon', 'return `' + context.config.styles + '`;')
//           (context._hass, context.config.entity, state, context.elements.icon.icon, context.subButtonIcon)
//         : '';

//     context.elements.customStyle.innerText = customStyle;
// }

export function initializesubButtonIcon(context) {
    // Assurez-vous que context.subButtonIcon est initialisé comme un tableau
    if (!Array.isArray(context.subButtonIcon)) {
        context.subButtonIcon = [];
    }

    // Trouvez tous les éléments d'icône et ajoutez-les au tableau
    context.content.querySelectorAll('.bubble-sub-button-icon').forEach((iconElement, index) => {
        // Stockez la référence de l'icône dans context.subButtonIcon à l'index correspondant
        context.subButtonIcon[index] = iconElement;
    });
}

export function changeStyle(context) {
    // Appel de la fonction pour initialiser les icônes
    initializesubButtonIcon(context);

    // Utilisez setTimeout ou une autre méthode pour attendre que le DOM soit prêt
    // ...

    const state = getState(context);

    // Appliquez votre style personnalisé
    const customStyle = context.config.styles
        ? Function('hass', 'entityId', 'state', 'icon', 'subButtonIcon', 'getWeatherIcon', `return \`${context.config.styles}\`;`)
          (context._hass, context.config.entity, state, context.elements.icon.icon, context.subButtonIcon, getWeatherIcon)
        : '';

    context.elements.customStyle.innerText = customStyle;
}
