# Bubble Card (Update in progress)

Bubble Card is a minimalist and customizable card collection for Home Assistant with a nice pop-up touch.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card)](#) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR)

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

## Table of contents

**[`Installation`](#installation)**  **[`Configuration`](#configuration)**  **[`Pop-up`](#pop-up)**  **[`Horizontal buttons stack`](#horizontal-buttons-stack)**  **[`Button`](#button)**  **[`Media player`](#media-player)**  **[`Cover`](#cover)**  **[`Separator`](#separator)**  **[`Empty column`](#empty-column)**  **[`Actions`](#tap-double-tap-and-hold-actions)**  **[`Styling`](#styling)**  **[`Conflicts`](#custom-components-conflicts)**  **[`Help`](#help)**  **[`Donate`](#donate)**

<br>

## Installation

**Home Assistant lowest supported version:** 2023.9.0

<details>

<summary>Without HACS</summary>

<br>

1. Download these files: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js) and [bubble-pop-up-fix.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-pop-up-fix.js)
2. Add these files to your `<config>/www` folder
3. On your dashboard click on the icon at the right top corner then on `Edit dashboard`
4. Click again on that icon and then click on `Manage resources`
5. Click on `Add resource`
6. Copy and paste this: `/local/bubble-card.js?v=1`
7. Click on `JavaScript Module` then `Create`
8. Go back and refresh your page
9. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`
10. After any update of the file you will have to edit `/local/bubble-card.js?v=1` and change the version to any higher number

If it's not working, just try to clear your browser cache.`

</details>

<details>

<summary>With HACS (Recommended)</summary>

<br>

This method allows you to get updates directly on the HACS main page

1. If HACS is not installed yet, download it following the instructions on [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download/)
2. Proceed to the HACS initial configuration following the instructions on [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. On your sidebar go to `HACS` > `Frontend`
4. Click on the `+` button at the bottom right corner
5. Now search for `Bubble Card` and then click on the button at the bottom right corner to download it
6. Go back on your dashboard and click on the icon at the right top corner then on `Edit dashboard`
7. You can now click on `Add card` in the bottom right corner and search for `Bubble Card`

If it's not working, try to clear your browser cache.

#### Videos

There is also a detailed setup video from **BeardedTinker**, thank you so much to you!  
▶ [YouTube - Pop-up cards with Bubble Card in Home Assistant](https://www.youtube.com/watch?v=oCpxhNk5JkE)

And also a video for the German users from **smart-live.net**, thanks a lot to you too!  
▶ [YouTube - Home Assistant Dashboard Bubble Card - Eine der Besten Karten 2023?](https://youtu.be/6ju6mTntvMI?si=EGvKm4qwjhcZdTyl)

</details>

<br>

## Configuration

All options can be configured in the Home Assistant editor. But you can find more details in the documentation below.

<details>

**<summary>Main options (YAML + description)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:bubble-card` | Type of the card |
| `card_type` | string | **Required** | `button`, `cover`, `empty-column`, `horizontal-buttons-stack`, `pop-up` or `separator` | Type of the Bubble Card, see below |
| `styles` | object list | Optional | Any CSS stylesheets | Allows you to customize your cards, see [styling](#styling) |

</details>

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

This card allows you to convert any vertical stack into a pop-up. Each pop-up is **hidden by default** and can be opened by targeting its link (e.g. `'#pop-up-name'`), with any card that supports the `navigate` [action](#tap-double-tap-and-hold-actions), or with the [horizontal buttons stack](#horizontal-buttons-stack) that is included.

> [!IMPORTANT]  
> This card must be placed within a vertical stack card at the first position to function properly. To avoid misalignment with your layout, please place all your vertical stacks/pop-ups before any other cards on your dashboard.
> <details>
> <summary>How to create a pop-up in the editor</summary>
> <br>
> 
> 1. To add a pop-up you first need to add a `vertical-stack` card to your dashboard
> 2. This `vertical-stack` must be before all your other cards in your view order
> 3. Now add a `Bubble Card` with the `Pop-up` type
> 4. Just fill in the `Hash` inputs and the ones you need
> </details>

---

### Pop-up options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Required** | Any unique hash (e.g. `'#kitchen'`) with ' ' | This is how you will open your pop-up |
| `name` | string | Optional | Any string | A name for your pop-up header |
| `icon` | string | Optional | Any `mdi:` icon or a link to a square image | An icon for your pop-up header, if not defined it will display the entity icon or the `entity-picture` |
| `entity` | string | Optional | Any switchable entity | Display a button to toggle this entity |
| `auto_close` | string | Optional | A timeout in milliseconds (e.g. `10000` for 10s) | Auto close the pop-up after a timeout |
| `close_on_click` | boolean | Optional | `true` or `false` (default) | Automatically close the pop-up after any interaction |
| `width_desktop` | string | Optional | Any CSS value | Width on desktop (`100%` by default on mobile) |
| `margin` | string | Optional | Any CSS value | Use this **only** if your pop-up is not well centered on mobile (e.g. `13px`) |
| `margin_top_mobile` | string | Optional | Any CSS value | Top margin on mobile (e.g. `-56px` if your header is hidden) |
| `margin_top_desktop` | string | Optional | Any CSS value | Top margin on desktop (e.g. `50%` for a half-sized pop-up) |
| `bg_color` | string | Optional | Any hex, rgb or rgba value | The background color of your pop-up (e.g. `#ffffff` for a white background) |
| `bg_opacity` | string | Optional | Any value from `0` to `100` | The background opacity of your pop-up (e.g. `100` for no transparency) |
| `bg_blur` | string | Optional | Any value from `0` to `100` | The background blur effect of your pop-up, **this only work if `bg_opacity` is not set to `100`** (e.g. `0` for no blur)|
| `shadow_opacity` | string | Optional | Any value from `0` to `100` | The shadow opacity of your pop-up (e.g. `0` to hide it) |
| `hide_backdrop` | boolean | Optional | `true` or `false` (default) | Set this to true on the first pop-up of your main dashboard to disable the backdrop on all pop-ups. |
| `background_update` | boolean | Optional | `true` or `false` (default) | Update pop-up content in background (not recommended) |
| `trigger_entity` | string | Optional | Any entity | Open this pop-up based on the state of any entity |
| `trigger_state` | string | Optional (**Required** if `trigger_entity` is defined) | Any entity state | Entity state to open the pop-up |
| `trigger_close` | boolean | Optional | `true` or `false` (default) | Close the pop-up when `trigger_state` is different |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on the icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

You also have access to [all the button settings](#button) for the header of the pop-up.

</details>

#### Examples

<details>

<summary>A pop-up</summary>

<br>

```yaml
type: vertical-stack
cards:
  - type: custom:bubble-card
    card_type: pop-up
    hash: '#kitchen'
    name: Kitchen
    icon: mdi:fridge
    entity: light.kitchen
    state: sensor.kitchen_temperature
    back_open: true
```

</details>
<details>

<summary>A button to open the pop-up (not a Bubble Card one)</summary>

<br>

```yaml
type: button
tap_action:
  action: navigate
  navigation_path: '#kitchen'
name: Kitchen
icon: mdi:fridge
```

</details>

---

> [!TIP]
> ### Pop-up trigger 
> This feature allows you to open a pop-up based on the state of any entity, for example, you can open a "Security" pop-up with a camera when a person is in front of your house. You can also create a toggle helper (input_boolean) and trigger its opening/closing in an automation.
> #### Example
> <details>
> <summary>Opening a pop-up when a binary_sensor is `on`</summary>
> <br>
>
> ```yaml
> type: custom:bubble-card
> card_type: pop-up
> hash: '#kitchen'
> name: Security
> icon: mdi:video
> trigger_entity: binary_sensor.front_door_motion
> trigger_state: 'on'
> trigger_close: true
> ```
> 
> </details>

---

> [!TIP]
> ### Different ways to close a pop-up 
> They are many ways to close a pop-up. For instance, you can swipe from the pop-up header to the bottom, by doing a long swipe inside the pop-up to the bottom, by pressing Escape on desktop, by removing the hash in the URL or by simply pressing the close button.

---

> [!TIP]
> ### Pop-up initialization fix
> If you notice that pop-up content appears upon page load, consider installing this fix as an additional module.
> <details>
> <summary>Installation</summary>
> <br>
>
> You can do this by adding `bubble-pop-up-fix.js` to your `configuration.yaml` like so:
> ```yaml
> frontend:
>   extra_module_url:
>     - /hacsfiles/Bubble-Card/bubble-pop-up-fix.js
> ```
> If you didn't install it with HACS, change the path accordingly. Then, clear your browser cache.
> 
> For Android HA Companion App users, you can close the app, then clear the app cache. If it's still not working, you can close and restart the app again.
> 
> For iOS HA Companion App users, you can go to your HA settings, then navigate to Companion App > Debug > Clear Frontend Cache (or something similar), then refresh the page or restart the app.
> 
> For previous users of the **Optimized mode**, you will need to replace your `type: custom:bubble-pop-up` with this in YAML mode:
> 
> ```yaml
> type: vertical-stack
> cards:
>   - type: custom:bubble-card
>     card_type: pop-up
> ```
> 
> </details>

<br>

## Horizontal buttons stack

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

This card is a companion to the pop-up card, allowing you to open the corresponding pop-ups. It also allows you to open any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible, and acts as a footer.

> [!IMPORTANT]  
> This card has to be the last one in your view (after every card and pop-up). It can't be inside any stack.

---

### Horizontal buttons stack options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Required** | The pop-up hash (e.g. `'#kitchen'`) with ' ' or any link | A link to open |
| `1_name` | string | Optional | Any string | A name for your button |
| `1_icon` | string | Optional | Any `mdi:` icon | An icon for your button |
| `1_entity` | string | Optional | Any light or light group | Display the color of that light in background |
| `1_pir_sensor` | string | Optional | Any binary sensor | At least one pir sensor or more for `auto_order` |
| `auto_order` | boolean | Optional | `true` or `false` (default) | Change the order of the buttons according to the room you just entered, **it needs to be `false` if you don't have any `_pir_sensor` in your code** |
| `margin` | string | Optional | Any CSS value | Use this **only** if your `horizontal-buttons-stack` is not well centered on mobile (e.g. `13px`) |
| `width_desktop` | string | Optional | Any CSS value | Width on desktop (`100%` by default on mobile) |
| `is_sidebar_hidden` | boolean | Optional | `true` or `false` (default) | Fix the horizontal buttons stack position if the sidebar is hidden on the desktop (only if you have made a modification to hide it yourself) |
| `rise_animation` | boolean | Optional | `true` (default) or `false` | Set this to `false` to disable the animation that activates once the page has loaded |
| `highlight_current_view` | boolean | Optional | `true` or `false` (default) | Highlight current hash / view with a smooth animation |
| `hide_gradient` | boolean | Optional | `true` or `false` (default) | Set this to `false` to hide the gradient |

> [!IMPORTANT]  
> The variables starting with a number define your buttons, just change this number to add more buttons (see example below).

</details>

#### Example

<details>

<summary>An horizontal buttons stack that reorganize itself based on occupancy sensors</summary>

<br>

```yaml
type: custom:bubble-card
card_type: horizontal-buttons-stack
auto_order: true
1_name: Living room
1_icon: mdi:sofa
1_link: '#living-room'
1_entity: light.living_room
1_pir_sensor: binary_sensor.living_room_motion
2_name: Kitchen
2_icon: mdi:fridge
2_link: '#kitchen'
2_entity: light.kitchen
2_pir_sensor: binary_sensor.kitchen_motion
3_name: Dining room
3_icon: mdi:silverware-fork-knife
3_link: '#dining-room'
3_entity: light.dining_room
3_pir_sensor: binary_sensor.dining_room_motion
```

</details>

<br>

## Button

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

This card can be a slider or a button, allowing you to toggle your entities or automation, and control the brightness of your lights and the volume of your media players. To access color / control of an entity, simply tap on the icon.

---

### Button options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any switchable entity, any media player or any light | An entity to control |
| `button_type` | string | Optional | `switch` (default), `slider` or `state` | The behavior of your button |
| `name` | string | Optional | Any string | A name for your button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon or a link to a square image | An icon for your button, if not defined it will display the entity icon or the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show the state of your `entity` below its `name` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

</details>

#### Example

<details>

<summary>A slider button that can control the brightness of a light</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
entity: light.kitchen_led
name: Kitchen LED
icon: mdi:led-strip-variant
```

</details>

<br>

## Media player

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

This card allows you to control a media player. You can tap on the icon to get more control.

---

### Media player options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any switchable entity, any media player or any light | An entity to control |
| `button_type` | string | Optional | `switch` (default), `slider` or `state` | The behavior of your button |
| `name` | string | Optional | Any string | A name for your button, if not defined it will display the entity name |
| `icon` | string | Optional | Any `mdi:` icon or a link to a square image | An icon for your button, if not defined it will display the entity icon or the `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show the state of your `entity` below its `name` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

</details>

#### Example

<details>

<summary>A slider button that can control the brightness of a light</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
entity: light.kitchen_led
name: Kitchen LED
icon: mdi:led-strip-variant
```

</details>

<br>

## Cover

![readme-cover](https://github.com/Clooos/Bubble-Card/assets/36499953/27d1c329-76ab-480b-b424-c79c9e68c788)

This card allows you to control your covers.

---

### Cover options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | A cover to control |
| `name` | string | Optional | Any string | A name for your cover, if not defined it will display the entity name |
| `show_state` | boolean | Optional | `true` or `false` (default) | Show the state of your `entity` below its `name` |
| `icon_open` | string | Optional | Any `mdi:` icon | An icon for your open cover, if not defined it will display the default open cover icon |
| `icon_close` | string | Optional | Any `mdi:` icon | An icon for your closed cover, if not defined it will display the default closed cover icon |
| `icon_up` | string | Optional | Any `mdi:` icon | An icon for your open cover button, if not defined it will display the default open cover icon |
| `icon_down` | string | Optional | Any `mdi:` icon | An icon for your close cover button, if not defined it will display the default close cover icon |
| `open_service` | string | Optional | Any service or script | A service to open your cover, default to `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | A service to stop your cover, default to `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | A service to close your cover, default to `cover.close_cover` |
| `tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon click, if undefined, `more-info` will be used. |
| `double_tap_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon double click, if undefined, `toggle` will be used. |
| `hold_action` | object | Optional | See [actions](#tap-double-tap-and-hold-actions) | Define the type of action on icon hold, if undefined, `more-info` will be used. |

</details>

#### Example

<details>

<summary>A card that can control a roller shade</summary>

<br>

```yaml
type: custom:bubble-card
card_type: cover
entity: cover.kitchen
name: Kitchen
icon_open: mdi:roller-shade
icon_close: mdi:roller-shade-closed
```

</details>

<br>

## Separator

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

This card is a simple separator for dividing your pop-up into categories / sections. e.g. Lights, Devices, Covers, Settings, Automations...

---

### Separator options

<details>

**<summary>Options (YAML + descriptions)</summary>**

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `name` | string | Optional but recommended | Any string | A name for your separator |
| `icon` | string | Optional but recommended | Any `mdi:` icon | An icon for your separator |

</details>

#### Example

<details>

<summary>A separator/divider for a "Covers" section</summary>

<br>

```yaml
type: custom:bubble-card
card_type: separator
name: Covers
icon: mdi:window-shutter
```

</details>

<br>

## Empty column

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

This card is here to fill an empty column. This is useful if you have an `horizontal-stack` in your pop-up with only one card. Take a look at the bottom right corner of this screenshot to (don't) see it.

---

### Empty column options

This card has no options and doesn’t supports [styling](#styling).

#### Example

<details>

<summary>An empty column in an horizontal stack</summary>

<br>

```yaml
type: horizontal-stack
cards:
  - type: custom:bubble-card
    card_type: button
    ...
  - type: custom:bubble-card
    card_type: empty-column
```

</details>

<br>

## Tap, double tap and hold actions

You can also use HA default tap actions, double tap actions and hold actions on the icons of the buttons, the pop-ups and the covers. This allows you to display the “more info” window by holding the icon and to turn on/off the lamp of a slider by a single tap for example.

---

### Action options

<details>

**<summary>Options (YAML + description)</summary>**

| Name | Type | Supported options | Description |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Action to perform |
| `target` | object |  | Only works with `call-service`. Follows the [home-assistant syntax](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Any path of your dashboard | Path to navigate to (e.g. `'#kitchen'` for opening a pop-up) when action defined as navigate |
| `url_path` | string | Any link | URL to open on click (e.g. `https://www.google.com`) when action is `url` |
| `service` | string | Any service | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service` |
| `data` or `service_data` | object | Any service data | Service data to include (e.g. `entity_id: media_player.kitchen`) when `action` defined as `call-service` |
| `confirmation` | object | See [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Display a confirmation popup, overrides the default `confirmation` object |

</details>

#### Example

<details>

<summary>A button that...</summary>

<br>

```yaml
tap_action: 
  action: toggle 
double_tap_action: 
  action: call-service 
  service: script.dark_scene 
hold_action: 
  action: more-info
```

</details>

<br>

## Styling

You can add custom styles in the editor or by adding `styles: |` in YAML **without using card-mod** which allows you to modify the CSS style of all the cards.

> [!IMPORTANT]  
> Please note that you will have to add `!important;` to some CSS styles that are already defined (see examples below).

---

#### Examples

<details>

<summary>Changing the font size of any Bubble Card</summary>

<br>

```yaml
styles: |
  ha-card { 
    font-size: 12px;
  }
```

</details>

<details>

<summary>Changing the background color of a single button in an `horizontal-buttons-stack`</summary>

<br>

```yaml
styles: >
  /* Selector for the '#kitchen' button */
  .kitchen > .color-background {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Changing the background color of a `button switch`</summary>

<br>

```yaml
styles: | 
  ha-card > div > div > div { 
    background: blue !important; 
  }
```

</details>

<details>

<summary>Changing the color of a `button slider`</summary>

<br>

```yaml
styles: |
  .range-fill { 
    background: rgba(79, 69, 87, 1) !important; 
  }
```

</details>

The Bubble theme for Home Assistant (like on the screenshots) can be found [here](https://github.com/Clooos/Bubble).

---

### Styles template

Advanced users can add templates in JS directly in their custom styles (Bubble Card doesn’t support Jinja templates yet).

More information about JS templates [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

<details>

<summary>Available variables</summary>

<br>

You have access to these variables in most cards:

 `state` will return the state of your defined `entity`.  
 `entity` will return your entity you defined like `switch.test` in this example.  
 `icon` can be used like this to change the icon `icon.setAttribute("icon", "mdi:lightbulb")`  
 `hass` is an advanced variable that alows you even more control, more info [here](https://developers.home-assistant.io/docs/dev_101_hass/).

But in all cards you can also use this:

 `hass.states['light.kitchen'].state` will return the state of `light.kitchen`.  
 `hass.states['light.kitchen'].attributes.brightness` will return the brightness attribute of `light.kitchen`.

</details>

#### Examples

<details>

<summary>Changing the background color of a button that is red when it's `off` and green when it's `on`</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
entity: switch.test
name: Test
styles: |
  .switch-button {
    background-color: ${state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Changing the background color of a button based on an entity for the horizontal buttons stack</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<br>

## Custom components conflicts

⚠️ For now there are some features that are not working with:

- UI Lovelace Minimalist (see https://github.com/Clooos/Bubble-Card/issues/41)
- Lovelace state switch (see https://github.com/Clooos/Bubble-Card/issues/47)
- Kiosk mode, but here is a [workaround](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678/121?u=cloos)

<br>

## Help

Feel free to open an [issue](https://github.com/Clooos/Bubble-Card/issues) if something is not working as expected. 

And for your questions, you can go ask here on the forum to get some help from me or the community :

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) 

<br>

## Donate

If you like my project and want to support me, please consider making a donation. Any amount is welcome and very much appreciated 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos)

[![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR)

<br>

Thank you, everyone, for your support, you all are my greatest motivation!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
