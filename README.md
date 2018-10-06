# dxmp-common

Provides a set of common interfaces and utilities for dxmp.

## Installation

```bash
npm install --save dxmp-common
```

All members are named exports and can be imported via destructuring:

```typescript
import { Dictionary, createPerma } from 'dxmp-common';
```

## Interfaces

### Dictionary<T>

A common interface to type a hash map. The hash key is always a string.

```typescript
import { Dictionary } from 'dxmp-common';
const hashOfNumbers: Dictionary<number>;
```

### IAlbum

Property|Type|Description
--------|----|-----------
id|number|The database ID of the album
title|string|Album title
wallpaper|boolean|Whether the album has wallpaper. If so, the filename will be the `{perma-slug}-album-wallpaper.jpg` (see [createPerma](#createpermatext-string-string))
art|boolean|Whether the album has album art. If so, the filename will be the `{perma-slug}-album-art.jpg` (see [createPerma](#createpermatext-string-string))

### ISong

Property|Type|Description
--------|----|-----------
id|number|The database ID of the song
title|string|Song title
albumId|number|The ID of the album that the song belongs to
artistId?|number|The ID of the song's artist
filename|string|The name of the song's MP3 file
duration|number|The length of the song in seconds
track?|number|The song's on disc track number
disc?|number|The song's disc number within a series
createdAt|number|The Unix timestamp the song was uploaded
addedBy?|number|The ID of the user that added the song

### ITracking

Property|Type|Description
--------|----|-----------
songId|number|The ID of the song tracked
userId|number|The ID of the user that triggered the tracking
type|[TrackingType](#trackingtype)|The type of event being tracked
createdAt|The Unix timestamp when the tracking event occurred

## Enums

### AlbumImageType

Name|Description
----|-----------
ART|Album art
WALLPAPER|Album wallpaper

### TrackingType

Name|Description
----|-----------
START|The user started playing a song
FINISH|The user finished listening to a song
SKIP|The user skipped a song

## Methods

### createPerma(text: string): string

Takes a string and returns a dxmpv2 compatible perma slug.

### isNumeric(val: any): boolean

Takes a value and returns whether that value is numeric. Works on both integers and floating values.